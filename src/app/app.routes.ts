import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'nosotros', component: About},
    {path: 'productos', component: Product},
    {path: 'contacto', component: Contact},
    {path: '**', redirectTo: ''} // Página no encontrada
];
