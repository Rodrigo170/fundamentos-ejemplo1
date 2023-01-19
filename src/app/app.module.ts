import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './pages/menu/menu.component';
import { HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';
import { PhotoComponent } from './pages/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactoComponent,
    MenuComponent,
    PostsComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //LLAMA EL MODULO DE RUTAS
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
