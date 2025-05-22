using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence; // Make sure this matches the namespace where your DbContext is defined

namespace API.Controllers;

public class ActivitiesController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<IActionResult> GetActivities()
    {
        var activities = await context.Activities.ToListAsync();
        return Ok(activities);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetActivity(String id)
    {
        var activity = await context.Activities.FindAsync(id);
        if (activity == null) return NotFound();
        return Ok(activity);
    }
}
