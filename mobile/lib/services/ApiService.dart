import 'dart:convert';
import 'package:http/http.dart' as http;

import '../models/Attraction.dart';
import '../models/Work.dart';

class ApiService {
  final String _baseUrl = "http://10.0.2.2:3000/api";

  Future<List<Attraction>> fetchAttractions() async {
    final response = await http.get(Uri.parse('$_baseUrl/attractions'));

    if (response.statusCode == 200) {
      List<dynamic> body = jsonDecode(response.body);
      List<Attraction> attractions = body
          .map((dynamic item) => Attraction.fromJson(item))
          .toList();
      return attractions;
    } else {
      throw Exception('Falha ao carregar as atrações');
    }
  }

  Future<Attraction> fetchAttractionById(int attractionId) async {
    final response = await http.get(
      Uri.parse('$_baseUrl/attractions/$attractionId'),
    );

    if (response.statusCode == 200) {
      Map<String, dynamic> body = jsonDecode(response.body);
      Attraction attraction = Attraction.fromJson(body);
      return attraction;
    } else {
      throw Exception('Falha ao carregar os detalhes da atração.');
    }
  }
}
