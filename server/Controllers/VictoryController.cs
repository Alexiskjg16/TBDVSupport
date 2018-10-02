using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server;
using SupportSystem.Models;

namespace SupportSystem.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class VictoryController : ControllerBase {

        private SupportGroupContext db { get; set; }

        public VictoryController(SupportGroupContext _db)
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
              var _questions = this.db.ShareAVictory.OrderByDescending(o => o.Date);

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _questions
            };

            return _rv;
        }
        

        [HttpPost]
        [Route("content/add")]
        public ActionResult<ResponseObject> PostContent([FromBody] ShareAVictory Content)
        {
            var _content = new ShareAVictory
            {
                Title = Content.Title,
                Content = Content.Content,
                Date = DateTime.Now,
            };

            this.db.ShareAVictory.Add(_content);

            this.db.SaveChanges();

            var _rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = _content
            };

            return _rv;
        }
    
    [HttpPatch("{id}")]
    public ShareAVictory Patch(int id)
    {
        var hearts = this.db.ShareAVictory.FirstOrDefault(f => f.Id == id);
        hearts.UpvoteCount++;
        this.db.SaveChanges();
        return hearts;
    }

    [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var VictoryPost = this.db.ShareAVictory.FirstOrDefault(f => f.Id == id);
            this.db.ShareAVictory.Remove(VictoryPost);
            this.db.SaveChanges();
            return Ok(new { success = true });
        }

        }
    }