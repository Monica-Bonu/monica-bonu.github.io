document.querySelectorAll('.company-section').forEach(section=>{
 const track=section.querySelector('.company-logos');
 const status=section.querySelector('.company-status');
 function move(direction){const step=track.firstElementChild.getBoundingClientRect().width;const max=track.scrollWidth-track.clientWidth;let next=track.scrollLeft+direction*step;if(direction>0&&track.scrollLeft>=max-2)next=0;else if(direction<0&&track.scrollLeft<=2)next=max;track.scrollTo({left:Math.max(0,Math.min(max,next)),behavior:'instant'});const first=Math.round(track.scrollLeft/step);const count=Math.round(track.clientWidth/step);status.textContent='Showing organisations '+(first+1)+' to '+Math.min(track.children.length,first+count)+' of '+track.children.length;}
 section.querySelectorAll('.company-arrow').forEach(button=>button.addEventListener('click',()=>move(Number(button.dataset.direction))));
 track.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowRight'?1:-1)}});
});