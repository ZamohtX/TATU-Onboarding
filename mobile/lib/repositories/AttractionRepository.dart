import '../models/Attraction.dart';
import '../services/ApiService.dart';

class AttractionRepository {
  final ApiService _apiService;

  AttractionRepository(this._apiService);

  Future<List<Attraction>> fetchAttractions(){
    return _apiService.fetchAttractions();
  }
}


