import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elem:ElementRef,private renderer:Renderer2) { }
   
  ngOnInit(): void {
    
  }
  

  @HostListener("mouseenter") onMouseEnter(event:Event){
    this.renderer.setStyle(this.elem.nativeElement, 'background-color','green')
    
  };

  @HostListener("mouseleave") onMouseLeave(event:Event){
    this.renderer.setStyle(this.elem.nativeElement, 'background-color','')
    
  };

  
  // private Colo(action:string){
  //   this.elem.nativeElement.style.backgroundColor=action;

  // }
}
