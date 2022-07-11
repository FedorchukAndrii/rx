const test = fromEvent(document.querySelector('canvas'), 'mousemove')
.pipe(
  map(event => ({
    x: event.offsetX,
    y: event.offsetY,
    ctx: event.target.getContext('2d')
  }))
)
.subscribe( position => {
  position.ctx.fillRect(position.x, position.y, 2, 2);
  timer(100).subscribe(() => {
    position.ctx.fillRect(position.x, position.y, 4, 4);
  });
  timer(200).subscribe(() => {
    position.ctx.fillRect(position.x, position.y, 8, 8);
  });
  timer(300).subscribe(() => {
    position.ctx.fillRect(position.x, position.y, 16, 16);
  });
});

const clear$ =  fromEvent(document.getElementById('clear'), 'click');

clear$.subscribe(() => {
document.querySelector('canvas').getContext('2d').clearRect(0, 0, 500, 500)
})