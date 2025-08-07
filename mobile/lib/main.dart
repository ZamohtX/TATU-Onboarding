import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'controllers/AttractionController.dart';
import 'controllers/WorkController.dart';
import 'repositories/WorkRepository.dart';
import 'repositories/AttractionRepository.dart';
import 'services/ApiService.dart';
import 'screens/AttractionsListScreen.dart';

void main() {
  runApp(const AppProviders());
}

class AppProviders extends StatelessWidget {
  const AppProviders({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(
          create: (context) =>
              AttractionController(AttractionRepository(ApiService())),
        ),
        ChangeNotifierProvider(
          create: (context) => WorkController(WorkRepository(ApiService())),
        )
      ],
      child: const AcervusApp(),
    );
  }
}

class AcervusApp extends StatelessWidget {
  const AcervusApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Acervus',
      theme: ThemeData(
        primarySwatch: Colors.brown,
        visualDensity: VisualDensity.adaptivePlatformDensity,
        appBarTheme: const AppBarTheme(foregroundColor: Colors.white),
      ),
      debugShowMaterialGrid: false,
      home: const AttractionsListScreen(),
    );
  }
}
