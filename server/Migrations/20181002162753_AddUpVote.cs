using Microsoft.EntityFrameworkCore.Migrations;

namespace server.Migrations
{
    public partial class AddUpVote : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "ShareAVictory");

            migrationBuilder.DropColumn(
                name: "UserName",
                table: "NeedEncouragement");

            migrationBuilder.AddColumn<int>(
                name: "UpvoteCount",
                table: "ShareAVictory",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UpvoteCount",
                table: "NeedEncouragement",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UpvoteCount",
                table: "ShareAVictory");

            migrationBuilder.DropColumn(
                name: "UpvoteCount",
                table: "NeedEncouragement");

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "ShareAVictory",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "NeedEncouragement",
                nullable: true);
        }
    }
}
