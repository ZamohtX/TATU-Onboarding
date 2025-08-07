import 'package:flutter/foundation.dart';
import '../models/Attraction.dart';
import '../repositories/AttractionRepository.dart';

class AttractionController extends ChangeNotifier {
  final AttractionRepository _repository;

  AttractionController(this._repository);

  // Estado interno da tela
  bool _isLoading = false;
  List<Attraction> _attractions = [];
  String? _error;

  // Getters
  bool get isLoading => _isLoading;
  List<Attraction> get attractions => _attractions;
  String? get error => _error;

  // Ação
  Future<void> fetchAttractions() async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      _attractions = await _repository.fetchAttractions();
    } catch (e) {
      _error = e.toString();
    }

    _isLoading = false;
    notifyListeners();
  }
}
