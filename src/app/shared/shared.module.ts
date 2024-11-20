import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { EmbedVideoPipe } from './pipes/embed-video.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

const components = [
  YoutubeVideoComponent,
  VideoCardComponent,
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    ...components,
    EmbedVideoPipe, // Declaración del pipe
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
  ],
  exports: [
    ...components,
    EmbedVideoPipe, // Exportación del pipe
  ]
})
export class SharedModule { }
