using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Filters;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class CityController : ApiController
    {
        [HttpGet, corsfilter]
        public IHttpActionResult AllCities()
        {
            var db = new MoebelEntities();
            var result = db.Cities.ToList();
            return Json(result); 
        }
        
        [HttpPut, corsfilter]
        public IHttpActionResult getAllWeather()
        {
            var db = new MoebelEntities();
            var result = db.Temps.ToList();
            return Json(result);
        }
        public class corsfilter : System.Web.Http.Filters.ActionFilterAttribute
        {
            public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
            {
                actionExecutedContext.Response.Headers.Add("Access-Control-Allow-Origin", "*");
                actionExecutedContext.Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type");
                actionExecutedContext.Response.Headers.Add("Access-Control-Allow-Methods", "*");
                base.OnActionExecuted(actionExecutedContext);
            }
        }
        [corsfilter]
        public void options()
        {
        }
    }
}
