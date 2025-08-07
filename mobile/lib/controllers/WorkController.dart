import 'package:flutter/foundation.dart';
import '../models/Work.dart';
import '../repositories/WorkRepository.dart';

class WorkController extends ChangeNotifier {
  final WorkRepository _repository;
  WorkController(this._repository);

  bool _isLoading = false;
  List<Work> _works = [];
  String? _error;

  bool get isLoading => _isLoading;
  List<Work> get works => _works;
  String? get error => _error;

  Future<void> fetchWorks(int attractionId) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      final detailedAttracion = await _repository.fetchWorksForAttraction(
        attractionId,
      );
      _works = detailedAttracion.works;
    } catch (e) {
      _error = e.toString();
    }

    _isLoading = false;
    notifyListeners();
  }
}
