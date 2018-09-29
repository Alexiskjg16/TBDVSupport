using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server;
using SupportSystem.Models;

namespace SupportSystem.Controllers {
    [Route ("api/IFeelEmpowered")]
    [ApiController]
    public class HaveaVictoryController : ControllerBase {
        [HttpGet]
        public IOrderedQueryable<ShareAVictory> Get () {
              var dBConnection = new SupportGroupContext();

              var WroteaVictory = dBConnection.ShareAVictory.OrderBy(o => o.Time)
              .ThenBy(t => t.Date);
              return WroteaVictory;

        }//END

        [HttpPost]
        public ShareAVictory Post ([FromBody] ShareAVictory shareAVictory){
            var dbConnection = new SupportGroupContext();
            dbConnection.ShareAVictory.Add(shareAVictory);
            dbConnection.SaveChanges();
            return shareAVictory;
             
        }
    }
}