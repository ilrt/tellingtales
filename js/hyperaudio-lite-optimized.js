/*! (C) The Hyperaudio Project. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Version 3.0.0 - HTML5 Only */

"use strict";

// Main class for HyperaudioLite functionality
class HyperaudioLite {
  constructor(
    transcriptId,
    mediaElementId,
    minimizedMode = false,
    autoscroll = false,
    doubleClick = false,
    webMonetization = false,
    playOnClick = false
  ) {
    this.transcript = document.getElementById(transcriptId);
    this.player = document.getElementById(mediaElementId);
    
    // Bind methods to ensure correct context
    this.preparePlayHead = this.preparePlayHead.bind(this);
    this.pausePlayHead = this.pausePlayHead.bind(this);
    this.setPlayHead = this.setPlayHead.bind(this);
    this.checkPlayHead = this.checkPlayHead.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    
    // Initialize the instance
    this.init(
      minimizedMode,
      autoscroll,
      doubleClick,
      webMonetization,
      playOnClick
    );
  }

  // Initialize the HyperaudioLite instance
  init(
    minimizedMode,
    autoscroll,
    doubleClick,
    webMonetization,
    playOnClick
  ) {
    // Set configuration
    this.minimizedMode = minimizedMode;
    this.autoscroll = autoscroll;
    this.doubleClick = doubleClick;
    this.webMonetization = webMonetization;
    this.playOnClick = playOnClick;
    this.highlightedText = false;
    this.paused = true;
    this.start = null;
    this.end = null;
    this.scrollerContainer = this.transcript;
    this.parentElementIndex = -1;
    
    // Setup the component parts
    this.setupTranscriptHash();
    this.setupPopover();
    this.setupPlayer();
    this.setupTranscriptWords();
    this.setupEventListeners();
    this.setupInitialPlayHead();
  }

  // Setup hash for transcript selection
  setupTranscriptHash() {
    const windowHash = window.location.hash;
    const hashVar = windowHash.substring(1, windowHash.indexOf("="));

    if (hashVar === this.transcript.id) {
      this.hashArray = windowHash
        .substring(this.transcript.id.length + 2)
        .split(",");
    } else {
      this.hashArray = [];
    }
  }

  // Setup the popover for text selection
  setupPopover() {
    if (typeof popover !== "undefined") {
      this.transcript.addEventListener("mouseup", () => {
        const selection = window.getSelection();
        const popover = document.getElementById("popover");
        let selectionText;

        if (selection.toString().length > 0) {
          selectionText = selection.toString().replaceAll("'", "`");
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          popover.style.left = `${rect.left + window.scrollX}px`;
          popover.style.top = `${rect.bottom + window.scrollY}px`;
          popover.style.display = "block";

          const mediaFragment = this.getSelectionMediaFragment();

          if (mediaFragment) {
            document.location.hash = mediaFragment;
          }
        } else {
          popover.style.display = "none";
        }

        const popoverBtn = document.getElementById("popover-btn");
        popoverBtn.addEventListener("click", (e) => {
          popover.style.display = "none";
          let cbText = `${selectionText} ${document.location}`;
          navigator.clipboard.writeText(cbText);

          const dialog = document.getElementById("clipboard-dialog");
          document.getElementById("clipboard-text").innerHTML = cbText;
          dialog.showModal();

          const confirmButton = document.getElementById("clipboard-confirm");
          confirmButton.addEventListener("click", () => dialog.close());

          e.preventDefault();
          return false;
        });
      });
    }
  }

  // Setup the media player
  setupPlayer() {
    // Set source from data attribute if present
    const mediaSrc = this.transcript.querySelector("[data-media-src]");
    if (mediaSrc) {
      this.player.src = mediaSrc.getAttribute("data-media-src");
    }

    // Add event listeners for the HTML5 video/audio player
    this.player.addEventListener("pause", this.pausePlayHead, false);
    this.player.addEventListener("play", this.preparePlayHead, false);
  }

  // Setup the transcript words
  setupTranscriptWords() {
    const words = this.transcript.querySelectorAll("[data-m]");
    this.wordArr = this.createWordArray(words);

    // Check for elements with data-m attributes that are not directly below <section>
    // These will contain <p> or similar that we can scroll to
    for (const word of words) {
      let parentTagName = word.parentElement.tagName;
      if (parentTagName !== "SECTION") {
        this.parentTag = parentTagName;
        break;
      }
    }

    this.parentElements = this.transcript.getElementsByTagName(this.parentTag || "P");
  }

  // Setup event listeners for interactions
  setupEventListeners() {
    const playHeadEvent = this.doubleClick ? "dblclick" : "click";
    this.transcript.addEventListener(playHeadEvent, this.setPlayHead, false);
    this.transcript.addEventListener(playHeadEvent, this.checkPlayHead, false);
  }

  // Setup initial playhead position based on URL hash
  setupInitialPlayHead() {
    this.start = this.hashArray[0];
    if (!isNaN(parseFloat(this.start))) {
      this.highlightedText = true;
      let indices = this.updateTranscriptVisualState(this.start);
      if (indices.currentWordIndex > 0 && this.autoscroll) {
        this.scrollToParagraph(
          indices.currentParentElementIndex,
          indices.currentWordIndex
        );
      }
    }

    this.end = this.hashArray[1];
    // Highlight text between start and end times
    if (this.start && this.end) {
      const words = this.transcript.querySelectorAll("[data-m]");
      for (let i = 1; i < words.length; i++) {
        let startTime = parseInt(words[i].getAttribute("data-m")) / 1000;
        let wordStart = (Math.round(startTime * 100) / 100).toFixed(2);
        if (
          wordStart >= parseFloat(this.start) &&
          parseFloat(this.end) > wordStart
        ) {
          words[i].classList.add("share-match");
        }
      }
    }
  }

  // Create an array of words with metadata from the transcript
  createWordArray(words) {
    return Array.from(words).map((word) => {
      const m = parseInt(word.getAttribute("data-m"));
      let p = word.parentNode;
      while (p !== document) {
        if (["p", "figure", "ul"].includes(p.tagName.toLowerCase())) {
          break;
        }
        p = p.parentNode;
      }
      word.classList.add("unread");
      return { n: word, m, p };
    });
  }

  // Get selection range for media fragment
  getSelectionRange() {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return null;

    const range = selection.getRangeAt(0);

    // Get all relevant spans
    const allSpans = Array.from(this.transcript.querySelectorAll("[data-m]"));

    // Find the first and last span that contain selected text
    let startSpan = null;
    let endSpan = null;
    let selectedText = range.toString();
    let trimmedSelectedText = selectedText.trim();

    for (let span of allSpans) {
      if (range.intersectsNode(span) && span.textContent.trim() !== "") {
        if (!startSpan) startSpan = span;
        endSpan = span;
      }
    }

    if (!startSpan || !endSpan) return null;

    // Adjust start span if selection starts with a space
    let startIndex = allSpans.indexOf(startSpan);
    while (selectedText.startsWith(" ") && startIndex < allSpans.length - 1) {
      startIndex++;
      startSpan = allSpans[startIndex];
      selectedText = selectedText.slice(1);
    }

    // Calculate start time
    let startTime = parseInt(startSpan.dataset.m) / 1000;

    // Calculate end time
    let duration = endSpan.dataset.d ? parseInt(endSpan.dataset.d) : 1000;
    let endTime = (parseInt(endSpan.dataset.m) + duration) / 1000;

    // Format to seconds at 2 decimal place precision
    let startTimeFormatted = (Math.round(startTime * 100) / 100).toFixed(2);
    let endTimeFormatted = (Math.round(endTime * 100) / 100).toFixed(2);

    // Only return a range if there's actually selected text (excluding only spaces)
    return trimmedSelectedText
      ? `${startTimeFormatted},${endTimeFormatted}`
      : null;
  }

  // Get media fragment from selection
  getSelectionMediaFragment() {
    let range = this.getSelectionRange();
    if (range === null) {
      return null;
    }
    return this.transcript.id + "=" + range;
  }

  // Set the playhead position in the media player based on the transcript
  setPlayHead(e) {
    const target = e.target || e.srcElement;
    this.highlightedText = false;
    this.clearActiveClasses();

    if (this.paused && target.dataset.m) {
      target.classList.add("active");
      target.parentNode.classList.add("active");
    }

    const timeSecs = parseInt(target.dataset.m) / 1000;
    this.updateTranscriptVisualState(timeSecs);

    if (!isNaN(timeSecs)) {
      this.end = null;
      this.player.currentTime = timeSecs;
      if (this.playOnClick) {
        this.player.play();
      }
    }
  }

  // Clear the active classes from the transcript
  clearActiveClasses() {
    const activeElements = Array.from(
      this.transcript.getElementsByClassName("active")
    );
    activeElements.forEach((e) => e.classList.remove("active"));
  }

  // Prepare the playhead for playback
  preparePlayHead() {
    this.paused = false;
    this.checkPlayHead();
  }

  // Pause the playhead
  pausePlayHead() {
    this.clearTimer();
    this.paused = true;
  }

  // Check the playhead position and update the transcript
  checkPlayHead() {
    this.clearTimer();
    
    this.currentTime = this.player.currentTime;
    
    if (this.highlightedText) {
      this.currentTime = this.start;
      this.player.currentTime = this.currentTime;
      this.highlightedText = false;
    }
    
    this.checkStatus();
  }

  // Clear the timer for the playhead
  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  // Scroll to the paragraph containing the current word
  scrollToParagraph(currentParentElementIndex, index) {
    if (!this.wordArr[index - 1]) return;
    
    const scrollNode =
      this.wordArr[index - 1].n.closest("p") || this.wordArr[index - 1].n;

    if (currentParentElementIndex !== this.parentElementIndex) {
      if (this.autoscroll) {
        if (scrollNode) {
          // Get the transcript content container to ensure we scroll within bounds
          const transcriptContainer = scrollNode.closest('.transcript-content') || this.scrollerContainer;
          
          // Use modern scrollIntoView for smooth scrolling, but only within the transcript container
          if (transcriptContainer && transcriptContainer.contains(scrollNode)) {
            // Scroll within the transcript container only
            const containerRect = transcriptContainer.getBoundingClientRect();
            const nodeRect = scrollNode.getBoundingClientRect();
            
            // Check if the node is outside the visible area of the container
            if (nodeRect.top < containerRect.top || nodeRect.bottom > containerRect.bottom) {
              transcriptContainer.scrollTo({
                top: transcriptContainer.scrollTop + (nodeRect.top - containerRect.top) - 20,
                behavior: "smooth"
              });
            }
          } else {
            // Fallback to original method if container not found
            scrollNode.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }
        } else {
          // Refresh word array if node wasn't found
          this.wordArr = this.createWordArray(
            this.transcript.querySelectorAll("[data-m]")
          );
          this.parentElements = this.transcript.getElementsByTagName(
            this.parentTag
          );
        }
      }
      this.parentElementIndex = currentParentElementIndex;
    }
  }

  checkStatus() {
    if (!this.paused) {
      if (this.end && parseFloat(this.end) < this.currentTime) {
        this.player.pause();
        this.end = null;
      } else {
        const indices = this.updateTranscriptVisualState(this.currentTime);
        const index = indices.currentWordIndex;

        if (index > 0 && this.autoscroll) {
          this.scrollToParagraph(indices.currentParentElementIndex, index);
        }

        if (this.minimizedMode) {
          const elements = this.transcript.querySelectorAll("[data-m]");
          let currentWord = "";
          let lastWordIndex = this.wordIndex;

          for (let i = 0; i < elements.length; i++) {
            if (elements[i].classList.contains("active")) {
              currentWord = elements[i].innerHTML;
              this.wordIndex = i;
            }
          }

          if (this.wordIndex !== lastWordIndex) {
            document.title = currentWord;
          }
        }

        // Calculate interval for next check
        let interval = 0;
        if (this.wordArr[index]) {
          interval = this.wordArr[index].m - this.currentTime * 1000;
        }

        this.timer = setTimeout(() => this.checkPlayHead(), interval + 1);
      }
    } else {
      this.clearTimer();
    }
  }
  
  // Check for payment pointer in element or its parents
  checkPaymentPointer(element) {
    if (!element) return null;
    
    const paymentPointer = element.getAttribute("data-wm");
    if (paymentPointer !== null) {
      return paymentPointer;
    }
    
    const parent = element.parentElement;
    return parent ? this.checkPaymentPointer(parent) : null;
  }

  // Update the visual state of the transcript based on the current time
  updateTranscriptVisualState(currentTime) {
    // Use binary search to find the current word
    let index = 0;
    let words = this.wordArr.length - 1;

    while (index <= words) {
      const guessIndex = index + ((words - index) >> 1);
      const difference = this.wordArr[guessIndex].m / 1000 - currentTime;

      if (difference < 0) {
        index = guessIndex + 1;
      } else if (difference > 0) {
        words = guessIndex - 1;
      } else {
        index = guessIndex;
        break;
      }
    }

    // Update word classes
    this.wordArr.forEach((word, i) => {
      const classList = word.n.classList;
      const parentClassList = word.n.parentNode.classList;

      if (i < index) {
        classList.add("read");
        classList.remove("unread", "active");
        parentClassList.remove("active");
      } else {
        classList.add("unread");
        classList.remove("read");
      }
    });

    // Update parent elements
    this.parentElements = this.transcript.getElementsByTagName(this.parentTag);
    Array.from(this.parentElements).forEach((el) =>
      el.classList.remove("active")
    );

    if (index > 0) {
      if (!this.paused) {
        this.wordArr[index - 1].n.classList.add("active");
      }
      this.wordArr[index - 1].n.parentNode.classList.add("active");
    }

    // Find the current parent element index
    const currentParentElementIndex = Array.from(this.parentElements).findIndex(
      (el) => el.classList.contains("active")
    );

    return {
      currentWordIndex: index,
      currentParentElementIndex,
    };
  }
  
  // Helper function to get current time
  getTime() {
    return this.player.currentTime;
  }
  
  // Helper function to set time
  setTime(seconds) {
    this.player.currentTime = seconds;
  }
  
  // Helper function to play
  play() {
    this.player.play();
    this.paused = false;
  }
  
  // Helper function to pause
  pause() {
    this.player.pause();
    this.paused = true;
  }
}

// Export for testing or module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = { HyperaudioLite };
}
