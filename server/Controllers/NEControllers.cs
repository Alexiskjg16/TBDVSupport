using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server;
using SupportSystem.Models;

namespace SupportSystem.Controllers {
     [Route ("api/NeedEncouragement")]
    [ApiController]
    public class NeedEncouragementController : ControllerBase {
       private SupportGroupContext db { get; set; }

        public NeedEncouragementController(SupportGroupContext _db)
        { 
            this.db = _db;
        }


        [HttpGet]
        public IOrderedQueryable<NeedEncouragement> Get () {
              var dBConnection = new SupportGroupContext();

              var NeedtheHelp = dBConnection.NeedEncouragement.OrderBy(o => o.)
              .ThenBy(t => t.Date);
              return NeedtheHelp;

        }

        [HttpPost]
        public NeedEncouragement Post ([FromBody] NeedEncouragement Content){
            var dbConnection = new SupportGroupContext();
            dbConnection.NeedEncouragement.Add(Content);
            dbConnection.SaveChanges();
            return Content;
             
        }
    }
}