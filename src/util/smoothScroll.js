const smoothScroll = (target, duration, position) => {
   let $target = target;
   let $targetPosition = position;
   let $startPosition = window.pageYOffset;
   let distance = $targetPosition - $startPosition;
   let startTime = null;
 
   const animation = currentTime => {
     if (startTime === null) startTime = currentTime;
     const timeElapsed = currentTime - startTime;
     const run = ease(timeElapsed, $startPosition, distance, duration);
     $target.scrollTo(0, run);
     if (timeElapsed < duration) requestAnimationFrame(animation);
   };
 
   const ease = (t, b, c, d) => {
     t /= d / 2;
     if (t < 1) return (c / 2) * t * t + b;
     t--;
     return (-c / 2) * (t * (t - 2) - 1) + b;
   };
 
   requestAnimationFrame(animation);
};

export default smoothScroll