using System;
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
            var conn = Environment.GetEnvironmentVariable("CONNECTION_STRING") ?? "server=localhost;database=SupportGroup";
                optionsBuilder.UseNpgsql(conn);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}
        public DbSet<NeedEncouragement> NeedEncouragement{ get; set; }
        public DbSet<ShareAVictory> ShareAVictory{ get; set; }
        public object HaveaVictory { get; internal set; }
    }
}
