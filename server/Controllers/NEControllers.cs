using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server;
using SupportSystem.Models;

namespace SupportSystem.Controllers {
    [Route ("api/controller")]
    [ApiController]
    public class NEPostsController : ControllerBase {

        private SupportGroupContext db { get; set; }

        public NEPostsController(SupportGroupContext _db)
        { 
            this.db = _db;
        }
        public class ResponseObject
        {
            public bool WasSuccessful { get; set; }
            public object Results { get; set; }
        }


        [HttpGet]
        [Route("content")]
       public ActionResult<ResponseObject> GetAllContent(){
              var _questions = this.db.NeedEncouragement.OrderByDescending(o => o.Date);

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _questions
            };

            return _rv;
        }
        

        [HttpPost]
        [Route("content/add")]
        public ActionResult<ResponseObject> PostContent([FromBody] NeedEncouragement Content)
        {
            var _content = new NeedEncouragement
            {
                Title = Content.Title,
                Content = Content.Content,
                Date = DateTime.Now,
            };

            this.db.NeedEncouragement.Add(_content);

            this.db.SaveChanges();

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _content
            };

            return _rv;
        }
    
        }
    }