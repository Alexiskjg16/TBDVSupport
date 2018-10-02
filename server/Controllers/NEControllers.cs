using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server;
using SupportSystem.Models;

namespace SupportSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NEController : ControllerBase
    {

        private SupportGroupContext db { get; set; }

        public NEController(SupportGroupContext _db)
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
        public ActionResult<ResponseObject> GetAllContent()
        {
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
            var contents = new NeedEncouragement
            {
                Title = Content.Title,
                Content = Content.Content,
                Date = DateTime.Now,
            };

            this.db.NeedEncouragement.Add(contents);

            this.db.SaveChanges();

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = contents
            };

            return _rv;
        }

        [HttpPatch("{id}")]
        public NeedEncouragement Patch(int id)
        {
            var hearts = this.db.NeedEncouragement.FirstOrDefault(f => f.Id == id);
            hearts.UpvoteCount++;
            this.db.SaveChanges();
            return hearts;
        }

    }
}