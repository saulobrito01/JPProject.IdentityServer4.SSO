import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./core";

import { PagesModule } from "./pages/pages.module";
import { AuthGuard } from "./core/auth/auth.guard";
import { CoreModule } from "./core/core.module";


export const routes: Routes = [
    {
        path: "", component: DefaultLayoutComponent, canActivate: [AuthGuard], data: { title: "Home" },
        children: [
            { path: "home", loadChildren: "app/management/home/home.module#HomeModule" },
            { path: "user", loadChildren: "app/management/user/user.module#UserModule" },

            { path: "base", loadChildren: "./views/base/base.module#BaseModule" },
            { path: "buttons", loadChildren: "./views/buttons/buttons.module#ButtonsModule" },
            { path: "charts", loadChildren: "./views/chartjs/chartjs.module#ChartJSModule" },
            { path: "dashboard", loadChildren: "./views/dashboard/dashboard.module#DashboardModule" },
            { path: "icons", loadChildren: "./views/icons/icons.module#IconsModule" },
            { path: "notifications", loadChildren: "./views/notifications/notifications.module#NotificationsModule" },
            { path: "theme", loadChildren: "./views/theme/theme.module#ThemeModule" },
            { path: "widgets", loadChildren: "./views/widgets/widgets.module#WidgetsModule" }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesModule,
        
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
