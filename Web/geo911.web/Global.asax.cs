using System;
using System.Web.Mvc;
using System.Web.Routing;

namespace geo911.Web
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            //RouteTable.Routes.IgnoreRoute("*");
            //RouteTable.Routes.IgnoreRoute("{file}.js");
            //RouteTable.Routes.IgnoreRoute("{file}.html");
            // /*
            RouteTable.Routes.MapRoute(
                name: "React failover",
                url: "{*uri}",
                defaults: new { controller = "React", action = "Index", id = UrlParameter.Optional }
            );
            // */
        }

    }
}