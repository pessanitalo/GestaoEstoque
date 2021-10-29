using Microsoft.EntityFrameworkCore.Migrations;

namespace webApi.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Produtos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Cod = table.Column<int>(nullable: false),
                    Nome = table.Column<string>(nullable: true),
                    DescProd = table.Column<string>(nullable: true),
                    QtdMensal = table.Column<int>(nullable: false),
                    QtdAtual = table.Column<int>(nullable: false),
                    DataCad = table.Column<string>(nullable: true),
                    DataSaida = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produtos", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Produtos");
        }
    }
}
