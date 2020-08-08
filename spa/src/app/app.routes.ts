import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const AppRouterModule = RouterModule.forRoot(routes)
