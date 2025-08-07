import '../models/Attraction.dart';
import '../services/ApiService.dart';

class WorkRepository {
  final ApiService _apiService;

  WorkRepository(this._apiService);

  Future<Attraction> fetchWorksForAttraction(int attractionId) {
    return _apiService.fetchAttractionById(attractionId);
  }
}
