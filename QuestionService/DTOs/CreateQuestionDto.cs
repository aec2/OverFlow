using QuestionService.Validators;

namespace QuestionService.DTOs;
using System.ComponentModel.DataAnnotations;
public record CreateQuestionDto(
    [Required]string Title, 
    [Required]string Content, 
    [Required][TagListValidator(1,5)]List<string> Tags);
