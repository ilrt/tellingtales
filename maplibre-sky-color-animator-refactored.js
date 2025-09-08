const pitonsCoordinates = {
  center: [-61.01353, 13.80609],
  zoom: 12.2,
  bearing: 106.1,
  pitch: 85,
};
const colourPalette = {
  one: "#9f70b2",
  two: "#6faa43",
  three: "#f8931d",
  //four: "#1780c2",
  four: "#6acacd",
  five: "#9f70b2",
  six: "#6faa43",
};
const emptyImageData = new Uint8Array([0, 0, 0, 0]);
// Config module
const MapConfig = {
  styles: {
    street: {
      style: "https://tiles.openfreemap.org/styles/liberty",
      maxZoom: 22,
    },
    satellite: {
      style: "styles/version-3.json",
      maxZoom: 15,
    },
  },
  locations: {
    pitonsCoordinates, // Reference the separate constant
  },
  videoData: {
    1: {
      title: "donerville-1",
      label: "Donerville 1",
      color: colourPalette.one,
      locations: [
        {
          id: 1,
          name: "The Pitons",
          color: colourPalette.one,
          mapStyle: "satellite",
          coordinates: pitonsCoordinates,
        },
        {
          id: 2,
          name: "Filming Location: Vieux Fort",
          color: colourPalette.two,
          mapStyle: "street",
          markerCoordinates: [-60.9629208, 13.7293806],
          coordinates: {
            center: [-60.9629208, 13.7293806],
            zoom: 18,
            bearing: 12.2,
            pitch: 45,
          },
        },
      ],
    },
    2: {
      title: "donerville-2",
      label: "Donerville 2",
      color: colourPalette.two,
      mToActionsMap: {
        11760: [{ type: "move", locationId: 2 }],
        15710: [
          {
            type: "drawPath",
            geojsonUrl: "decoded_polyline.geojson",
            color: "#9f70b2",
            initialZoom: 9,
            zoom: 15,
            duration: 4170,
          },
        ],
        50230: [{ type: "move", locationId: 6 }],
        52540: [{ type: "move", locationId: 4 }],
        166170: [{ type: "move", locationId: 5 }],
        129820: [{ type: "move", locationId: 6 }],
        219720: [{ type: "move", locationId: 1 }],
      },
      locations: [
        {
          id: 1,
          name: "The Pitons",
          color: colourPalette.one,
          mapStyle: "satellite",
          coordinates: pitonsCoordinates,
        },
        {
          id: 2,
          name: "Cayenne, French Guiana",
          color: colourPalette.two,
          mapStyle: "street",
          coordinates: {
            center: [-51.864, 4.079],
            zoom: 6.53,
            bearing: 0,
            pitch: 0,
          },
        },
        {
          id: 3,
          name: "Roseau",
          color: colourPalette.three,
          mapStyle: "street",
          coordinates: {
            center: [-61.02412, 13.95412],
            zoom: 15,
            bearing: 27.8,
            pitch: 39,
          },
        },
        {
          id: 4,
          name: "The 'Calvary', Vieux Fort",
          color: colourPalette.four,
          mapStyle: "street",
          markerCoordinates: [-60.955175, 13.727384],
          coordinates: {
            center: [-60.955175, 13.727384],
            zoom: 17,
            bearing: 8.4,
            pitch: 42,
          },
        },
        {
          id: 5,
          name: "La Bouche, Vieux Fort",
          color: colourPalette.five,
          mapStyle: "street",
          markerCoordinates: [-60.9578106, 13.7281476],
          coordinates: {
            center: [-60.9578106, 13.7281476],
            zoom: 17,
            bearing: 24.6,
            pitch: 49,
          },
        },
        {
          id: 6,
          name: "The Mangue, Vieux Fort",
          color: colourPalette.six,
          mapStyle: "street",
          coordinates: {
            center: [-60.953061, 13.727692],
            zoom: 17,
            bearing: 19.6,
            pitch: 34,
          },
        },
      ],
    },
    3: {
      title: "kentillia-1",
      label: "Kentillia 1",
      color: colourPalette.three,
      locations: [
        {
          id: 1,
          name: "The Pitons",
          color: colourPalette.one,
          color: "#9f70b2",
          mapStyle: "satellite",
          coordinates: pitonsCoordinates,
        },
        {
          id: 2,
          name: "Filming Location: Sir Arthur Lewis Community College",
          color: colourPalette.two,
          mapStyle: "street",
          markerCoordinates: [-60.995536, 13.999036],
          coordinates: {
            center: [-60.995536, 13.999036],
            zoom: 16,
            bearing: 0,
            pitch: 45,
          },
        },
      ],
    },
    4: {
      title: "kentillia-2",
      label: "Kentillia 2",
      color: colourPalette.four,
      mToActionsMap: {
        150820: [{ type: "move", locationId: 2 }],
        163220: [{ type: "move", locationId: 3 }],
        178080: [{ type: "move", locationId: 4 }],
        194280: [{ type: "move", locationId: 5 }],
        203240: [{ type: "move", locationId: 6 }],
        254440: [{ type: "move", locationId: 1 }],
      },
      locations: [
        {
          id: 1,
          name: "The Pitons",
          color: colourPalette.one,
          mapStyle: "satellite",
          coordinates: pitonsCoordinates,
        },
        {
          id: 2,
          name: "Guyana",
          color: colourPalette.two,
          mapStyle: "street",
          coordinates: {
            center: [-57.589, 5.492],
            zoom: 6.53,
            bearing: 0,
            pitch: 0,
          },
        },
        {
          id: 3,
          name: "St Kitts",
          color: colourPalette.three,
          mapStyle: "street",
          coordinates: {
            center: [-62.7547, 17.3306],
            zoom: 8.8,
            bearing: 0,
            pitch: 0,
          },
        },
        {
          id: 4,
          name: "Babonneau",
          color: colourPalette.four,
          mapStyle: "street",
          coordinates: {
            center: [-60.943528, 14.003744],
            zoom: 16.8,
            bearing: 0,
            pitch: 45,
          },
        },
        {
          id: 5,
          name: "Piaye",
          color: colourPalette.five,
          mapStyle: "street",
          coordinates: {
            center: [-61.020026, 13.754207],
            zoom: 16.8,
            bearing: 0,
            pitch: 45,
          },
        },
        {
          id: 6,
          name: "West Africa",
          color: colourPalette.six,
          mapStyle: "satellite",
          coordinates: {
            center: [0.12, 20.05],
            zoom: 2.85,
            bearing: 0,
            pitch: 0,
          },
        },
      ],
    },
    5: {
      title: "fergusson",
      label: "Fergusson",
      color: colourPalette.five,
      mToActionsMap: {
        1280: [{ type: "move", locationId: 5 }],
        13600: [{ type: "move", locationId: 4 }],
        40290: [{ 
          type: "showPhoto", 
          photoUrl: "Dr-Kenny-Anthony.jpg", 
          caption: "Dr. Kenny Anthony",
          duration: 3000 
        }],
        54570: [{ type: "move", locationId: 5 }],
        150820: [{ type: "move", locationId: 6 }],
        172940: [{ type: "move", locationId: 1 }],
      },
      locations: [
        {
          id: 1,
          name: "The Pitons",
          color: colourPalette.one,
          mapStyle: "satellite",
          coordinates: pitonsCoordinates,
        },
        {
          id: 2,
          name: "Filming Location: Beausejour",
          color: colourPalette.two,
          mapStyle: "street",
          markerCoordinates: [-60.956913, 13.754199], 
          coordinates: {
            center: [-60.956913, 13.754199],
            zoom: 16,
            bearing: 0,
            pitch: 45,
          },
        },
        {
          id: 3,
          name: "Pon George",
          color: colourPalette.three,
          mapStyle: "street",
          markerCoordinates: [-61.0240035,13.7786204], 
          coordinates: {
            center: [-61.024234, 13.778086],
            zoom: 13.4,
            bearing: 0,
            pitch: 0,
          },
        },
        {
          id: 4,
          name: "Choiseul",
          color: colourPalette.four,
          mapStyle: "street",
          markerCoordinates: [-61.049771, 13.775293],
          coordinates: {
            center: [-61.049771, 13.775293],
            zoom: 15,
            bearing: 0,
            pitch: 0,
          },
        },
        {
          id: 5,
          name: "Devil's Bridge",
          color: colourPalette.five,
          mapStyle: "street",
          markerCoordinates: [-61.0240035,13.7786204], 
          coordinates: {
            center: [-61.024234, 13.778086],
            zoom: 13.4,
            bearing: 0,
            pitch: 0,
          },
        },
        {
          id: 6,
          name: "Morne Lezard",
          color: colourPalette.six,
          mapStyle: "street",
          markerCoordinates: [-61.026211, 13.776499],
          coordinates: {
            center: [-61.026211, 13.776499],
            zoom: 15,
            bearing: 0,
            pitch: 0,
          },
        },
      ],
    },
    6: {
      title: "june",
      label: "June",
      color: colourPalette.six,
      mToActionsMap: {
        11840: [{ type: "move", locationId: 3 }],
        18533: [{ type: "move", locationId: 4 }],
        23860: [{ type: "move", locationId: 6 }],
        27200: [{ type: "move", locationId: 5 }],
        83860: [{ type: "playSound", soundUrl: "sounds/mixkit-domestic-cat-hungry-meow-45.wav" }],
        233430: [{ type: "playSound", soundUrl: "sounds/cat-meow-195613.mp3" }],
        243430: [{ type: "move", locationId: 1 }],
      },
      locations: [
        {
          id: 1,
          name: "The Pitons",
          color: colourPalette.one,
          mapStyle: "satellite",
          coordinates: pitonsCoordinates,
        },
        {
          id: 2,
          name: "Filming Location: Rodney Bay",
          color: colourPalette.two,
          mapStyle: "street",
          markerCoordinates: [-60.95268, 14.075185], 
          coordinates: {
            center: [-60.95268, 14.075185],
            zoom: 15.4,
            bearing: 0,
            pitch: 45,
          },
        },
        {
          id: 3,
          name: "Leslie Land, Castries",
          color: colourPalette.three,
          mapStyle: "street",
          markerCoordinates: [-60.986905, 14.007983], 
          coordinates: {
            center: [-60.986905, 14.007983],
            zoom: 18,
            bearing: 0,
            pitch: 0,
          },
        },
        {
          id: 4,
          name: "Vieux Fort",
          color: colourPalette.four,
          mapStyle: "street",
          markerCoordinates: [-60.952814, 13.727988],
          coordinates: {
            center: [-60.952814, 13.727988],
            zoom: 15.8,
            bearing: 0,
            pitch: 0,
          },
        },
        {
          id: 5,
          name: "Marc, Bexon",
          color: colourPalette.five,
          mapStyle: "street",
          markerCoordinates: [-60.960311, 13.955661],
          coordinates: {
            center: [-60.960311, 13.955661],
            zoom: 17.4,
            bearing: 0,
            pitch: 0,
          },
        },
        {
          id: 6,
          name: "Barbados",
          color: colourPalette.six,
          mapStyle: "satellite",
          markerCoordinates: [-59.558836, 13.14922], 
          coordinates: {
            center: [-60.259479, 13.572069],
            zoom: 7.5,
            bearing: 0,
            pitch: 0,
          },
        },
      ],
    },
  },
};

// SkyAnimator class
class SkyColorAnimator {
  constructor(map) {
    this.map = map;
    this.timeOfDay = 0;
    this.skyPalette = {
      midnight: {
        start: "rgba(2, 0, 20, 1)", // Almost black
        end: "rgba(10, 0, 94, 1)", // Deep navy
        horizonBlend: 0.2,
      },
      dawn: {
        start: "rgba(254, 215, 102, 1)", // Golden yellow
        end: "rgba(205, 237, 246, 1)", // Light blue
        horizonBlend: 0.4,
      },
      noon: {
        start: "rgba(205, 237, 246, 1)", // Light blue
        end: "rgba(36, 123, 160, 1)", // Deep blue
        horizonBlend: 0.8,
      },
      dusk: {
        start: "rgba(255, 32, 110, 1)", // Bright pink/red
        end: "rgba(10, 0, 94, 1)", // Deep navy
        horizonBlend: 0.4,
      },
    };
    // Define the order of phases
    this.phaseOrder = ["midnight", "dawn", "noon", "dusk"];
  }

  parseColor(colorStr) {
    const match = colorStr.match(
      /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/
    );
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
      a: parseFloat(match[4] || 1),
    };
  }

  interpolateColor(color1, color2, factor) {
    const c1 = this.parseColor(color1);
    const c2 = this.parseColor(color2);
    return `rgba(${Math.round(c1.r + factor * (c2.r - c1.r))}, ${Math.round(
      c1.g + factor * (c2.g - c1.g)
    )}, ${Math.round(c1.b + factor * (c2.b - c1.b))}, 1)`;
  }

  determinePhase(time) {
    time = time % 24;
    const phaseIndex = Math.floor(time / 6);
    const phaseProgress = (time % 6) / 6;
    const currentPhaseName = this.phaseOrder[phaseIndex] || this.phaseOrder[0];
    const nextPhase =
      this.phaseOrder[(phaseIndex + 1) % this.phaseOrder.length] ||
      this.phaseOrder[1];
    return {
      currentPhase: currentPhaseName,
      nextPhase: nextPhase,
      progress: phaseProgress,
    };
  }

  updateSkyColor(time) {
    if (!this.map) return;
    const { currentPhase, nextPhase, progress } = this.determinePhase(time);
    //console.log("Updating sky color:", { currentPhase, nextPhase, progress });
    const currentColors = this.skyPalette[currentPhase];
    const nextColors = this.skyPalette[nextPhase];
    const skyStart = this.interpolateColor(
      currentColors.start,
      nextColors.start,
      progress
    );
    const skyEnd = this.interpolateColor(
      currentColors.end,
      nextColors.end,
      progress
    );
    const horizonBlend =
      currentColors.horizonBlend +
      progress * (nextColors.horizonBlend - currentColors.horizonBlend);
    this.map.setSky({
      "sky-color": skyEnd,
      "horizon-color": skyStart,
      "sky-horizon-blend": horizonBlend,
    });
  }

  // Animate day cycle
  animateDayCycle(duration = 30000) {
    // 30 seconds for full day cycle
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;
      const time = progress * 24;
      this.updateSkyColor(time);
      this.animationFrameId = requestAnimationFrame(animate);
    };
    this.animationFrameId = requestAnimationFrame(animate);
  }

  stopAnimation() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
  }

  destroy() {
    this.stopAnimation();
    if (this.map) {
      this.map.off("load");
      this.map.off("styleimagemissing");
    }
  }
}

// MapController class
class MapController {
  constructor(config) {
    this.config = config;
    this.map = null;
    this.skyAnimator = null;
    this.currentStyle = "satellite";
    this.markers = [];
  }

  initMap() {
    if (typeof maplibregl === "undefined") {
      console.error("Maplibre GL JS is not loaded");
      return;
    }
    this.map = new maplibregl.Map({
      container: "map",
      style: this.config.styles.satellite.style,
      center: this.config.locations.pitonsCoordinates.center,
      bearing: this.config.locations.pitonsCoordinates.bearing,
      zoom: this.config.locations.pitonsCoordinates.zoom,
      pitch: this.config.locations.pitonsCoordinates.pitch,
      maxZoom: this.config.styles.satellite.maxZoom,
      maxPitch: 85,
      antialias: true,
      attributionControl: false,
    });
    this.map.on("error", (error) => {
      console.error("Map error:", error);
    });
    this.map.on("load", () => {
      //console.log("Map loaded");
    });
    this.map.on("styleimagemissing", (e) => {
      const id = e.id;
      this.map.addImage(id, { width: 1, height: 1, data: emptyImageData });
    });
    this.map.once("style.load", () => {
      //console.log("Style loaded");
      //this.map.addControl(new maplibregl.AttributionControl({compact: true}));
      this.map.setSky({
        "sky-color": "rgba(2, 0, 20, 1)",
        "sky-horizon-blend": 0.5,
        "horizon-color": "rgba(10, 0, 94, 1)",
        "horizon-fog-blend": 0,
        "fog-color": "#000000",
        "fog-ground-blend": 0,
      });
      if (this.skyAnimator) {
        this.skyAnimator.destroy();
      }
      this.skyAnimator = new SkyColorAnimator(this.map);
      this.skyAnimator.animateDayCycle();
    });
  }

  changeStyle(styleName) {
    if (this.config.styles[styleName]) {
      this.currentStyle = styleName;
      this.map.setStyle(this.config.styles[styleName].style, {
        diff: false,
      });
      this.map.setMaxZoom(this.config.styles[styleName].maxZoom);
      this.map.once("styledata", () => {
        //console.log("Style data loaded");
        if (this.skyAnimator) {
          this.skyAnimator.destroy();
        }
        this.skyAnimator = new SkyColorAnimator(this.map);
        if (styleName === "satellite") {
          this.map.setSky({ "sky-color": "rgba(2, 0, 20, 1)" });
          setTimeout(() => this.skyAnimator.animateDayCycle(), 500);
        } else {
          this.map.setSky({ "sky-color": "rgba(36, 123, 160, 1)" });
        }
      });
    }
  }

  clearMarkers() {
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];
  }

  // New method to add a marker if markerCoordinates exists
  addMarker(location) {
    if (location.markerCoordinates) {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundColor = location.color || "#ff0000";
      el.style.width = "20px";
      el.style.height = "20px";
      el.style.borderRadius = "50%";
      el.style.border = "2px solid white";
      el.style.boxShadow = "0 0 5px rgba(0,0,0,0.5)";

      const marker = new maplibregl.Marker(el)
        .setLngLat(location.markerCoordinates)
        .addTo(this.map);

      this.markers.push(marker);
      return marker;
    }
    return null;
  }

  async drawPath(geojsonUrl = "decoded_polyline.geojson", options = {}) {
    // Remove previous path if exists
    if (this.map.getSource("animated-path")) {
      if (this.map.getLayer("animated-path"))
        this.map.removeLayer("animated-path");
      this.map.removeSource("animated-path");
    }

    // Load GeoJSON
    const response = await fetch(geojsonUrl);
    const geojson = await response.json();

    // Assume first feature is a LineString
    // IMPORTANT: DO NOT SORT COORDINATES FOR ANIMATION.
    // Use them in their original order as they define the path.
    const coords = geojson.features[0].geometry.coordinates; // Removed .slice() as we don't need a mutable copy if not sorting

    const startCoord = coords[0];
    if (startCoord) {
      this.map.jumpTo({
        center: startCoord,
        zoom: options.initialZoom || this.map.getZoom(), // Use an initialZoom option or current zoom
        essential: true, // Ensures it happens immediately
      });
    }

    // Animation parameters
    const totalSteps = options.steps || 60;
    const duration = options.duration || 3000; // ms
    let currentStep = 1;

    // Add empty source and layer
    this.map.addSource("animated-path", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [coords[0]], // Start with just the first coordinate
            },
          },
        ],
      },
    });

    this.map.addLayer({
      id: "animated-path",
      type: "line",
      source: "animated-path",
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": options.color || "#ff6600",
        "line-width": options.width || 2,
        "line-dasharray": [2, 2], // dotted
      },
    });

    // Animate the line and camera
    const animate = () => {
      // Calculate the number of coordinates to show in this step.
      // Ensure the index doesn't exceed the total number of coordinates.
      const numberOfCoordsToShow = Math.min(
        Math.ceil((coords.length * currentStep) / totalSteps),
        coords.length // Cap at total length to prevent over-indexing
      );

      // Slice the original, unsorted coordinates
      const stepCoords = coords.slice(0, numberOfCoordsToShow);

      this.map.getSource("animated-path").setData({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: stepCoords,
            },
          },
        ],
      });

      // Move camera to the latest point
      const lastCoord = stepCoords[stepCoords.length - 1];
      if (lastCoord) {
        this.map.flyTo({
          center: lastCoord,
          zoom: options.zoom || this.map.getZoom(),
          speed: 0.5,
          curve: 1.2,
          essential: true,
        });
      }

      if (currentStep < totalSteps) {
        currentStep++;
        setTimeout(animate, duration / totalSteps);
      } else {
        // Optional: If you want to perform an action after the animation completes
        //console.log("Path animation complete!");
      }
    };
    animate();
  }
}

class VideoController {
  constructor(config, mapController) {
    this.config = config;
    this.mapController = mapController;
    this.currentVideoKey = null;
    this.currentObservers = [];
    this.overlayTimeout = null; // For image overlay timing
  }

  init() {
    this.generateVideoThumbnails();
    this.handleResize();
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    const isMobile = window.innerWidth < 768;
    if (isMobile !== this.isMobile) {
      this.isMobile = isMobile;
      //this.isMobile = true; // Force mobile layout for testing
      this.generateVideoThumbnails(); // Regenerate layout on resize
    }
  }

  // Clean up observers when changing videos
  cleanupObservers() {
    this.currentObservers.forEach(observer => observer.disconnect());
    this.currentObservers = [];
  }

  generateVideoThumbnails() {
    const videoThumbnailsContainer =
      document.querySelector(".video-thumbnails");
    videoThumbnailsContainer.innerHTML = "";

    if (this.isMobile) {
      // Mobile layout: Create a select dropdown directly from videoData
      //console.log("Generating mobile video thumbnails");
      const selectElement = document.createElement("select");
      selectElement.className = "video-mobile-select form-select w-100";
      selectElement.setAttribute("aria-label", "Select a video...");

      // Add options for each video
      Object.keys(this.config.videoData).forEach((videoId) => {
        const video = this.config.videoData[videoId];
        const option = document.createElement("option");
        option.value = videoId;
        option.textContent = video.label;
        selectElement.appendChild(option);
      });

      // Add event listener for selection
      selectElement.addEventListener("change", () => {
        const videoId = selectElement.value;
        if (videoId) {
          this.handleVideoSelectionFromDropdown(videoId);
          const borderColor = this.config.videoData[videoId].color;
          selectElement.style.borderColor = borderColor;
        }
      });

      // Set default border color based on the first option
      const defaultVideoId = selectElement.value; // Get the initial value of the select box
      if (defaultVideoId) {
        const defaultBorderColor = this.config.videoData[defaultVideoId].color;
        selectElement.style.borderColor = defaultBorderColor;
      }

      videoThumbnailsContainer.appendChild(selectElement);
    } else {
      // Desktop layout: Use buttons
      //console.log("Generating desktop video thumbnails");
      videoThumbnailsContainer.innerHTML = '<ul id="videos" class="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2"></ul>';
      const videosUl = videoThumbnailsContainer.querySelector('#videos'); 
      
      Object.keys(this.config.videoData).forEach((videoId, index) => {
        const video = this.config.videoData[videoId];
        const listItem = document.createElement("li");
        listItem.className = "col"; // Bootstrap column class for responsive grid
        
        const thumbnailButton = document.createElement("button");
        thumbnailButton.classList.add("btn", "video-thumbnail", "w-100");
        thumbnailButton.setAttribute("data-video", videoId);
        thumbnailButton.style.backgroundColor = video.color;
        if (index === 0) thumbnailButton.classList.add("active");
        thumbnailButton.textContent = video.label;

        thumbnailButton.addEventListener("click", () =>
          this.handleVideoSelection(thumbnailButton)
        );

        listItem.appendChild(thumbnailButton);
        videosUl.appendChild(listItem);
      });
    }

    // Automatically load the first video and its locations
    if (Object.keys(this.config.videoData).length > 0) {
      const firstVideoId = Object.keys(this.config.videoData)[0]; // Get the first valid videoId
      this.currentVideoKey = firstVideoId; // Set current video key
      this.generateLocationButtons(firstVideoId);
      const transcriptUrl = `videos/${this.config.videoData[firstVideoId].title}.json`;
      this.setUpVideo(
        firstVideoId,
        "videoPlaceholder",
        "transcriptContent",
        transcriptUrl
      );
    }
  }

  // New method to handle video selection from the dropdown
  handleVideoSelectionFromDropdown(videoId) {
    // Clean up previous observers and reset mToActionsMap
    this.cleanupObservers();
    this.currentVideoKey = videoId;
    
    this.mapController.clearMarkers();
    this.generateLocationButtons(videoId);
    const location = MapConfig.videoData[videoId].locations[0];
    this.handleLocationSelection(location);

    const transcriptUrl = `videos/${this.config.videoData[videoId].title}.json`;
    this.setUpVideo(
      videoId,
      "videoPlaceholder",
      "transcriptContent",
      transcriptUrl
    );
  }

  handleVideoSelection(button) {
    document
      .querySelectorAll(".video-thumbnail")
      .forEach((t) => t.classList.remove("active"));
    button.classList.add("active");

    const videoId = button.getAttribute("data-video");
    
    // Clean up previous observers and reset mToActionsMap
    this.cleanupObservers();
    this.currentVideoKey = videoId;
    
    this.mapController.clearMarkers();
    this.generateLocationButtons(videoId);
    this.handleLocationSelection(MapConfig.videoData[videoId].locations[0]);

    const transcriptUrl = `videos/${this.config.videoData[videoId].title}.json`;
    this.setUpVideo(
      videoId,
      "videoPlaceholder",
      "transcriptContent",
      transcriptUrl
    );
  }

  generateLocationButtons(videoId) {
    const locationThumbnailsContainer = document.querySelector(
      ".location-thumbnails"
    );
    const locations = this.config.videoData[videoId].locations;
    locationThumbnailsContainer.innerHTML = '';

    if (this.isMobile) {
      // Mobile layout: Create a select dropdown directly from locations
      //console.log("Generating mobile location thumbnails");
      const selectElement = document.createElement("select");
      selectElement.className = "location-mobile-select form-select";
      selectElement.setAttribute("aria-label", "Select a location...");

      // Add options for each location
      locations.forEach((location) => {
        const option = document.createElement("option");
        option.value = location.id;
        option.textContent = location.name;
        selectElement.appendChild(option);
      });

      // Add event listener for selection
      selectElement.addEventListener("change", () => {
        const locationId = selectElement.value;
        if (locationId) {
          const location = locations.find((loc) => loc.id == locationId);
          if (location) {
            this.handleLocationSelection(location);
            selectElement.style.borderColor = location.color;
          }
        }
      });

      // Set default border color based on the first option
      const defaultLocationId = selectElement.value; // Get the initial value of the select box
      if (defaultLocationId) {
        const location = locations.find((loc) => loc.id == defaultLocationId);
        selectElement.style.borderColor = location.color;
      }

      locationThumbnailsContainer.appendChild(selectElement);
    } else {
      // Desktop layout: Use buttons
      //console.log("Generating desktop location thumbnails");
      locationThumbnailsContainer.innerHTML = '<ul id="locations" class="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2"></ul>';
      const locationsUl = locationThumbnailsContainer.querySelector('#locations');
      
      locations.forEach((location, index) => {
        const listItem = document.createElement("li");
        listItem.className = "col"; // Bootstrap column class for responsive grid
        
        const locationButton = document.createElement("button");
        locationButton.classList.add("btn", "location-thumbnail", "w-100");
        locationButton.style.backgroundColor = location.color;
        locationButton.setAttribute("data-location-id", location.id);
        locationButton.setAttribute(
          "data-map-style",
          location.mapStyle || "street"
        );
        
        // Add white movie camera icon for filming locations and clean up the text
        if (location.name.includes("Filming Location")) {
          // Remove "Filming Location: " and replace with white camera icon
          const cleanName = location.name.replace(/^Filming Location:\s*/, "");
          locationButton.classList.add("has-icon");
          locationButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="white" style="display: inline; margin-right: 4px; vertical-align: middle;"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>${cleanName}`;
          // Apply dynamic font sizing
          locationButton.style.fontSize = this.adjustFontSizeForText(cleanName);
        } else if (location.hasVideo) {
          locationButton.classList.add("has-icon");
          locationButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="white" style="display: inline; margin-right: 4px; vertical-align: middle;"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>${location.name}`;
          // Apply dynamic font sizing
          locationButton.style.fontSize = this.adjustFontSizeForText(location.name);
        } else {
          locationButton.textContent = location.name;
          // Apply dynamic font sizing
          locationButton.style.fontSize = this.adjustFontSizeForText(location.name);
        }

        // Set the first button as active by default
        if (index === 0) {
          locationButton.classList.add("active");
          //this.handleLocationSelection(location); // Automatically select the first location
        }

        locationButton.addEventListener("click", (event) => {
          document
            .querySelectorAll(".location-thumbnail")
            .forEach((btn) => btn.classList.remove("active"));
          event.target.classList.add("active");
          this.handleLocationSelection(location);
        });
        
        listItem.appendChild(locationButton);
        locationsUl.appendChild(listItem);
      });
    }
  }

  adjustFontSizeForText(text) {
    // Dynamically adjust font size based on text length to fit in button
    const baseLength = 25; // Conservative threshold - most text fits at normal size
    const baseFontSize = 14; // Base font size in px
    const minFontSize = 10; // Minimum readable font size (increased from 9)
    
    if (text.length <= baseLength) {
      return baseFontSize + 'px';
    }
    
    // Only reduce for genuinely long text
    if (text.length <= 35) {
      return '12px'; // Slight reduction for moderately long text
    }
    
    // For very long text, calculate scaled font size
    const scaleFactor = Math.max(0.7, baseLength / text.length);
    const adjustedSize = Math.max(minFontSize, baseFontSize * scaleFactor);
    
    return Math.round(adjustedSize) + 'px';
  }

  handleLocationSelection(location) {
    //const locationId = location.id;
    //const videoId = document.querySelector('.video-thumbnail.active').getAttribute('data-video');
    //const location = this.config.videoData[videoId].locations.find((loc) => loc.id == locationId);

    if (this.mapController.map) {
      this.mapController.skyAnimator.stopAnimation();
      const mapStyle = location.mapStyle || "street";
      this.mapController.changeStyle(mapStyle);
      if (mapStyle === "satellite") {
        this.mapController.skyAnimator.animateDayCycle();
      }

      this.mapController.clearMarkers();
      if (location.markerCoordinates) {
        this.mapController.addMarker(location);
      }

      this.mapController.map.flyTo({
        center: location.coordinates.center,
        zoom: location.coordinates.zoom || 12,
        bearing: location.coordinates.bearing || 0,
        pitch: location.coordinates.pitch || 0,
        essential: true,
      });
    }
  }

  // Simple method to play short sound effects
  playSound(soundUrl, volume = 0.7) {
    //console.log("Playing sound:", soundUrl);
    const audio = new Audio(soundUrl);
    audio.volume = volume;
    audio.play().catch(error => {
      console.warn('Sound playback failed:', error);
    });
  }

  // Enhanced video loading optimization for archive.org videos
  optimizeVideoLoading(videoElement, videoUrl) {
    console.log("Optimizing video loading for:", videoUrl);
    
    // Use ArchiveOptimizer if available
    let optimizedUrl = videoUrl;
    if (typeof ArchiveOptimizer !== 'undefined') {
      optimizedUrl = ArchiveOptimizer.implementProgressiveLoading(videoElement, videoUrl);
    }
    
    // Set video source with optimized URL
    videoElement.src = optimizedUrl;
    
    // Add loading event listeners for better UX
    videoElement.addEventListener('loadstart', () => {
      console.log('Video loading started');
      this.showLoadingIndicator(true);
    });
    
    videoElement.addEventListener('canplay', () => {
      console.log('Video can start playing');
      this.showLoadingIndicator(false);
    });
    
    videoElement.addEventListener('waiting', () => {
      console.log('Video buffering...');
      this.showLoadingIndicator(true);
    });
    
    videoElement.addEventListener('playing', () => {
      console.log('Video playing smoothly');
      this.showLoadingIndicator(false);
    });
    
    // Handle network errors gracefully
    videoElement.addEventListener('error', (e) => {
      console.error('Video loading error:', e);
      this.handleVideoError(videoUrl);
    });
    
    // Additional archive.org optimizations
    videoElement.crossOrigin = 'anonymous';
    
    // Set buffer size based on connection speed
    if (typeof ArchiveOptimizer !== 'undefined') {
      const quality = ArchiveOptimizer.detectConnectionSpeed();
      const settings = ArchiveOptimizer.qualitySettings[quality];
      videoElement.preload = settings.preload;
      
      // Log optimization info
      console.log(`Archive.org: Using ${quality} quality settings`);
    } else {
      videoElement.preload = 'metadata';
    }
    
    // Try to preload some video data
    videoElement.load();
  }

  // Show/hide loading indicator
  showLoadingIndicator(show) {
    let indicator = document.getElementById('video-loading-indicator');
    
    if (show && !indicator) {
      // Create loading indicator if it doesn't exist
      indicator = document.createElement('div');
      indicator.id = 'video-loading-indicator';
      indicator.innerHTML = `
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          z-index: 1000;
          font-size: 14px;
        ">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="
              width: 20px;
              height: 20px;
              border: 2px solid #ffffff33;
              border-top: 2px solid white;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            "></div>
            Loading video...
          </div>
        </div>
        <style>
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      `;
      
      const videoContainer = document.querySelector('.video-container');
      if (videoContainer) {
        videoContainer.style.position = 'relative';
        videoContainer.appendChild(indicator);
      }
    } else if (!show && indicator) {
      indicator.remove();
    }
  }

  // Handle video loading errors with fallback strategies
  handleVideoError(originalUrl) {
    console.warn('Attempting video error recovery for:', originalUrl);
    
    // Try alternative archive.org URL formats
    const alternativeUrls = this.generateAlternativeArchiveUrls(originalUrl);
    
    alternativeUrls.forEach((url, index) => {
      setTimeout(() => {
        console.log(`Trying alternative URL ${index + 1}:`, url);
        const videoElement = document.getElementById('videoPlaceholder');
        if (videoElement) {
          videoElement.src = url;
          videoElement.load();
        }
      }, index * 2000); // Try each alternative with 2-second delays
    });
  }

  // Generate alternative archive.org URLs for better reliability
  generateAlternativeArchiveUrls(originalUrl) {
    const alternatives = [];
    
    // Original URL example: https://archive.org/download/donerville-1_202509/Donerville_1.mp4
    
    // Try with different archive.org servers/mirrors
    const urlParts = originalUrl.split('/');
    if (urlParts.length >= 5) {
      const itemId = urlParts[4]; // e.g., "donerville-1_202509"
      const filename = urlParts[5]; // e.g., "Donerville_1.mp4"
      
      // Alternative 1: Use ia601XXX.us.archive.org direct servers
      alternatives.push(`https://ia601608.us.archive.org/view_archive.php?archive=/34/items/${itemId}/${filename}`);
      
      // Alternative 2: Use different server numbers
      for (let serverNum of ['601', '801', '601']) {
        alternatives.push(`https://ia${serverNum}608.us.archive.org/34/items/${itemId}/${filename}`);
      }
      
      // Alternative 3: Use the streaming version
      alternatives.push(`https://archive.org/serve/${itemId}/${filename}`);
    }
    
    return alternatives;
  }

  // Method to show photo overlay on the map
  showPhotoOverlay(photoUrl, caption = '', duration = 3000) {
    //console.log("Showing photo overlay:", photoUrl);
    
    const overlay = document.getElementById('imageOverlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayCaption = document.getElementById('overlayCaption');
    
    if (!overlay || !overlayImage || !overlayCaption) {
      console.warn('Image overlay elements not found');
      return;
    }

    // Clear any existing timeout
    if (this.overlayTimeout) {
      clearTimeout(this.overlayTimeout);
    }

    // Set image source and caption
    overlayImage.src = photoUrl;
    overlayCaption.textContent = caption;
    overlayCaption.style.display = caption ? 'block' : 'none';

    // Show overlay with animation
    overlay.classList.add('show');

    // Hide overlay after specified duration
    this.overlayTimeout = setTimeout(() => {
      overlay.classList.remove('show');
    }, duration);

    // Handle image load errors
    overlayImage.onerror = () => {
      console.error('Failed to load image:', photoUrl);
      overlay.classList.remove('show');
    };
  }

  setUpVideo(videoKey, videoId, transcriptId, transcriptUrl) {
    const transcriptDiv = document.getElementById(transcriptId);
    const videoElement = document.getElementById(videoId);
    
    fetch(transcriptUrl)
      .then((response) => response.json())
      .then((data) => {
        const html = this.loadJSONAndOutputHTML(data, transcriptId);
        transcriptDiv.innerHTML = html;
        
        // Enhanced video loading with buffering optimization
        if (videoElement && data.url) {
          this.optimizeVideoLoading(videoElement, data.url);
        }
        
        new HyperaudioLite(
          transcriptId,
          videoId,
          false,
          true,
          false,
          false,
          false
        );

        // --- Add this block below ---
        const currentVideo = MapConfig.videoData[videoKey];
        //console.log("Current video data:", currentVideo);
        if (
          currentVideo &&
          currentVideo.mToLocationMap &&
          typeof currentVideo.mToLocationMap === "object"
        ) {
          const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "class"
              ) {
                const span = mutation.target;
                if (span.classList.contains("active")) {
                  const m = span.getAttribute("data-m");
                  const locIdx = currentVideo.mToLocationMap[m];
                  if (locIdx !== undefined) {
                    // Find the location by id, not by array index
                    const location = currentVideo.locations.find(
                      (loc) => loc.id == locIdx
                    );
                    if (location) {
                      this.handleLocationSelection(location);
                    }
                  }
                }
              }
            }
          });
          transcriptDiv.querySelectorAll("span[data-m]").forEach((span) => {
            observer.observe(span, { attributes: true });
          });
          // Store the observer for cleanup
          this.currentObservers.push(observer);
        }
        if (
          currentVideo &&
          currentVideo.mToActionsMap &&
          typeof currentVideo.mToActionsMap === "object"
        ) {
          const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "class"
              ) {
                const span = mutation.target;
                if (span.classList.contains("active")) {
                  const m = span.getAttribute("data-m");
                  const actions = currentVideo.mToActionsMap[m];
                  if (actions && Array.isArray(actions)) {
                    actions.forEach((action) => {
                      if (action.type === "move") {
                        const location = currentVideo.locations.find(
                          (loc) => loc.id == action.locationId
                        );
                        if (location) this.handleLocationSelection(location);
                      } else if (action.type === "drawPath") {
                        // Example usage:
                        // action.geojsonUrl = "decoded_polyline.geojson"
                        // action.color = "#00aaff"
                        this.mapController.drawPath(
                          action.geojsonUrl || "decoded_polyline.geojson",
                          {
                            color: action.color || "#00aaff",
                            duration: action.duration || 3000,
                            initialZoom: action.initialZoom || 15,
                            zoom: action.zoom || 15,
                          }
                        );
                      } else if (action.type === "showPhoto") {
                        // Show photo overlay on the map
                        this.showPhotoOverlay(action.photoUrl, action.caption, action.duration);
                      } else if (action.type === "playSound") {
                        // Play short sound effect (like cat meows)
                        // Example: { type: "playSound", soundUrl: "sounds/meow.wav", volume: 0.7 }
                        this.playSound(action.soundUrl, action.volume || 0.7);
                      }
                      // Add more action types as needed
                    });
                  }
                }
              }
            }
          });
          transcriptDiv.querySelectorAll("span[data-m]").forEach((span) => {
            observer.observe(span, { attributes: true });
          });
          // Store the observer for cleanup
          this.currentObservers.push(observer);
        }
        // --- End block ---
      })
      .catch((error) => console.error("Error loading transcript:", error));
  }

  loadJSONAndOutputHTML(data, transcriptId) {
    const url = data.url;
    const paragraphs = data.article.section.paragraphs;
    let htmlOutput = `<div id="${transcriptId}" class="hyperaudio-transcript">\n`;
    htmlOutput += "  <article>\n";
    htmlOutput += `    <section data-media-src="${url}">\n`;

    paragraphs.forEach((paragraph) => {
      htmlOutput += "      <p>\n";
      paragraph.spans.forEach((span) => {
        const m = span.m;
        const d = span.d;
        const speakerClass = span.class;
        const text = span.text;
        if (text.length > 0) {
          htmlOutput += `<span data-m="${m}"`;
          if (d !== null) {
            htmlOutput += ` data-d="${d}"`;
          }
          htmlOutput += ` class="${speakerClass}">${text}</span>\n`;
        }
      });
      htmlOutput += "      </p>\n";
    });

    htmlOutput += "    </section>\n";
    htmlOutput += "  </article>\n";
    htmlOutput += "</div>";
    return htmlOutput;
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const mapController = new MapController(MapConfig);
  mapController.initMap();
  const videoController = new VideoController(MapConfig, mapController);
  videoController.init();
});
