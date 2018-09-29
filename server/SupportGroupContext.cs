using Microsoft.EntityFrameworkCore;
using SupportSystem.Models;

namespace SupportSystem
{
    public partial class SupportGroupContext : DbContext
    {
        public SupportGroupContext()
        {
        }

        public SupportGroupContext(DbContextOptions<SupportGroupContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("server=localhost;database=SupportGroup");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}
        public DbSet<NeedEncouragement> NeedEncouragement{ get; set; }
        public DbSet<ShareAVictory> ShareAVictory{ get; set; }
        public object HaveaVictory { get; internal set; }
    }
}
