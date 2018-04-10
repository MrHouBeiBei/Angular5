import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './containers/test/test.component';
// import { MenuComponent } from "app/common/menu/menu.component";

export const routes: Routes = [
//   { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: '', redirectTo: '', pathMatch: 'full'},
//   { path: 'home', loadChildren: 'app/module/home/home.module#HomeModule' },
//   { path: 'demo', loadChildren: 'app/module/demo/demo.module#DemoModule'},

  { path: 'test',
  component:TestComponent ,
  data:{title:'测试'} 
  },
//   { path: 'menu',
//   component: MenuComponent,
//   data:{title:'测试'} 
//   },

//   { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
//   { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}