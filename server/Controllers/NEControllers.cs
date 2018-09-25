using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server;
using SupportSystem.Models;

namespace SupportSystem.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class NeedEncouragementController : ControllerBase {
        [HttpGet]
        public IOrderedQueryable<NeedEncouragement> Get () {
              var dBConnection = new SupportGroupContext();

              var NeedtheHelp = dBConnection.NeedEncouragement.OrderBy(o => o.Time)
              .ThenBy(t => t.Date);
              return NeedtheHelp;

        }//END

        [HttpPost]
        public NeedEncouragement Post ([FromBody] NeedEncouragement Content){
            var dbConnection = new SupportGroupContext();
            dbConnection.NeedEncouragement.Add(Content);
            dbConnection.SaveChanges();
            return Content;
             
        }
    }
}