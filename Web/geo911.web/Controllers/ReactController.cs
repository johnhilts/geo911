using System.Web.Mvc;

namespace geo911.Web.Controllers
{
    public class ReactController : Controller
    {
        // GET: React
        public ActionResult Index()
        {
            return File("/index.html", "text/html");
        }
    }
}