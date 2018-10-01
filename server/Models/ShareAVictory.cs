using System;

namespace SupportSystem.Models
{
    public class ShareAVictory
    {
        public int Id { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public int UpvoteCount { get; set; }
        public string Title { get; set; }

        public string Content { get; set; }

    }
}
