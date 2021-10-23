using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using webApi.Data;
using webApi.Models;

namespace webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly DataContext _context;

        public ProdutoController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.Produtos);
        }

        [HttpGet("{id}")]
        public IActionResult GetId(int id)
        {
            var produto = _context.Produtos.FirstOrDefault(x => x.Id == id);

            if (produto == null) return BadRequest("O produto não existe!");
            return Ok(produto);
        }

        [HttpPost]
        public IActionResult post(Produto produto)
        {
            _context.Add(produto);
            _context.SaveChanges();
            return Ok(produto);
        }

        public Produto GetProdutoId(int id)
        {
            //busca o produto por Id
            IQueryable<Produto> query = _context.Produtos;
           
            query = query.AsNoTracking()
                .OrderBy(a => a.Id)
                .Where(a => a.Id == id);

            return query.FirstOrDefault();
        }

        [HttpPut("update/{id}")]
        public IActionResult updateQuantity(int id, atualizaQtd quantidade)
        {
           //chama o metodo que busca por ai
            var produto = GetProdutoId(id);

            //metodo que atualiza o banco
            produto.QtdAtual = produto.QtdAtual + quantidade.QtdAtual;

            _context.Update(produto);
            _context.SaveChanges();
            return Ok(produto);
        }

        [HttpDelete("remove/{id}")]
        public IActionResult remove(int id)
        {
            var produto = GetProdutoId(id);

            _context.Remove(produto);
            _context.SaveChanges();
            return Ok();
        }
    }
}
