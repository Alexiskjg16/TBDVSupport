using System;

namespace SupportSystem.Models {
    public class NeedEncouragement {
        public int Id { get; set; }
        public int UpvoteCount { get; set; }
        
        public DateTime Date { get; set; } = DateTime.Now;

        public string Title { get; set; }

        public string Content { get; set; }

    }
}
