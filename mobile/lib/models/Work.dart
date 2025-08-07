class Work {
  final int id;
  final String title;
  final String? author;
  final String? description;
  final int attractionId;

  Work({
    required this.id,
    required this.title,
    this.author,
    this.description,
    required this.attractionId,
  });

  factory Work.fromJson(Map<String, dynamic> json) {
    return Work(
      id: json['id'],
      title: json['title'],
      author: json['author'],
      description: json['description'],
      attractionId: json['attraction_id'],
    );
  }
}
