AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "avengers",
          title: "AVENGERS",
          url: "./assets/thumbnails/AVENGERS.png",
        },
        {
          id: "krrish",
          title: "KRRISH",
          url: "./assets/thumbnails/KRRISH.png",,
        },
  
        {
          id: "spiderman",
          title: "SPIDERMAN",
          url: "./assets/thumbnails/SPIDERMAN.png",
        },
        {
          id: "x-men",
          title: "X-MEN",
          url: "./assets/thumbnails/X-MEN.png",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl=this.createborder(position,item.id)
        
        
        // Thumbnail Element
       const thumbNail = this.createThumbNail(item);
       borderEl.appendChild(thumbNail);
        
       
       // Title Text Element
        const titleE1=this.createtitleE1(position,item)
        
        borderEl.appendChild(titleE1)
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "ring",
        radiusInner: 9,
        radiusOuter: 10,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#0077CC",
        opacity: 1,
      });
  
      return entityEl;
    },
    createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius: 9,
      });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    },
  
  });
  