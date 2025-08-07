import 'Work.dart';

class Attraction {
  final int id;
  final String name;
  final String? description;
  final List<Work> works;

  Attraction({
    required this.id,
    required this.name,
    this.description,
    required this.works,
  });

  factory Attraction.fromJson(Map<String, dynamic> json) {
    final worksData = json['works'] as List<dynamic>?;
    final List<Work> worksList = worksData != null
        ? worksData.map((item) => Work.fromJson(item)).toList()
        : [];

    return Attraction(
      id: json['id'],
      name: json['name'],
      description: json['description'],
      works: worksList,
    );
  }
}
