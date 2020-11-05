//Responsive Components: a Solution to the Container Queries Problem

class ResizeComponent{

  constructor(props) {
  
    this.options = {
      breakpoints: {
         "xs" : 767,
         "sm" : 768,
         "md" : 992,
         "lg" : 1200
      },
      items: null,
      itemClass: null

    };

    
      //update options
      if (typeof props === "object") {
        for (var property in props) {
          if (props.hasOwnProperty(property)) {
            this.options[property] = props[property];
          }
        }
      }
      if(this.options.items === null){
        console.log('Missing html object');
        return;
      }
      //load images if get into view
      if ('ResizeObserver' in window) {
        const resizer = new ResizeObserver(
          this.handleResize.bind(this),
          this.options
        );
        document.querySelectorAll(this.options.items).forEach( item => {
          resizer.observe(item);
        });
      } else {
        console.log('ResizeObserver not supported!');
      }
  
  }


  handleResize(entries) {  
    try{
      var self = this;
       const breakpoints = self.options.breakpoints;
       entries.forEach((entry) => {
          Object.keys(breakpoints).forEach( (breakpoint) => {
            let minWidth = breakpoints[breakpoint];
              if(entry.contentRect.width <= breakpoints['xs']) {
                entry.target.classList.add('xs');
                entry.target.classList.remove('sm', 'md', 'lg');
              }
              else{
                if (entry.contentRect.width >= minWidth) {
                  entry.target.classList.add(breakpoint);
              
                } else {
                  entry.target.classList.remove(breakpoint);
                }

                  entry.target.classList.remove('xs');
              }
          });//end object keys
        });
    }
    catch(e){
      console.log(e.message);
    }

  }
}

export default ResizeComponent;
