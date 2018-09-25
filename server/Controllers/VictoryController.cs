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
    public class HaveaVictoryController : ControllerBase {
        [HttpGet]
        public IOrderedQueryable<HaveaVictory> Get () {
              var dBConnection = new SupportGroupContext();

              var WroteaVictory = dBConnection.HaveaVictory.OrderBy(o => o.Time)
              .ThenBy(t => t.Date);
              return WroteaVictory;

        }//END

        [HttpPost]
        public ShareAVictory Post ([FromBody] HaveaVictory Content){
            var dbConnection = new SupportGroupContext();
            dbConnection.HaveaVictory.Add(Content);
            dbConnection.SaveChanges();
            return Content;
             
        }
    }
}