using Microsoft.AspNetCore.Mvc;
using api.Models;
using System.Collections.Generic;
using System.Linq;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotesController : ControllerBase
    {
        private static List<Note> notes = new()
        {
            new Note { Id = 1, Content = "Welcome to your notes API!" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Note>> Get()
        {
            return Ok(notes);
        }

        [HttpPost]
        public ActionResult<Note> Post([FromBody] Note note)
        {
            note.Id = notes.Count + 1;
            notes.Add(note);
            return Ok(note);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var note = notes.FirstOrDefault(n => n.Id == id);
            if (note == null)
            {
                return NotFound();
            }

            notes.Remove(note);
            return Ok();
        }
    }
}
