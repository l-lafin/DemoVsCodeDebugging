using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Demo.Api.Models;

namespace Demo.Api.Controllers
{
    [Route("api/heros")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Hero>> GetAllHeros()
        {
            return Ok(new List<Hero> 
            {
                new Hero{ Name = "Spider-man", Id = "1" },
                new Hero{ Name = "Black panther", Id = "2" },
                new Hero{ Name = "Iron man", Id = "3" },
                new Hero{ Name = "Ant-man", Id = "4" },
                new Hero{ Name = "Doctor Strange", Id = "5" },
                new Hero{ Name = "Thor", Id = "6" },
                new Hero{ Name = "Captain america", Id = "7" },
            });
        }
    }
}
