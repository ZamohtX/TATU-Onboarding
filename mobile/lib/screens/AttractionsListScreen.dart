// lib/screens/attractions_list_screen.dart

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../controllers/AttractionController.dart';
import 'WorkListScreen.dart';

class AttractionsListScreen extends StatefulWidget {
  const AttractionsListScreen({super.key});

  @override
  State<AttractionsListScreen> createState() => _AttractionsListScreenState();
}

class _AttractionsListScreenState extends State<AttractionsListScreen> {
  @override
  void initState() {
    super.initState();

    WidgetsBinding.instance.addPostFrameCallback((_) {
      Provider.of<AttractionController>(
        context,
        listen: false,
      ).fetchAttractions();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Acervus - Atrações'),
        backgroundColor: Colors.brown,
      ),
      body: Consumer<AttractionController>(
        builder: (context, controller, child) {
          if (controller.isLoading) {
            return const Center(child: CircularProgressIndicator());
          }

          if (controller.error != null) {
            return Center(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Text('Ocorreu um erro: ${controller.error}'),
              ),
            );
          }

          if (controller.attractions.isEmpty) {
            return const Center(child: Text('Nenhuma atração encontrada.'));
          }

          return ListView.builder(
            itemCount: controller.attractions.length,
            itemBuilder: (context, index) {
              final attraction = controller.attractions[index];
              return ListTile(
                title: Text(attraction.name),
                subtitle: Text(attraction.description ?? 'Sem descrição'),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => WorksListScreen(
                        attractionId: attraction.id,
                        attractionName: attraction.name,
                      ),
                    ),
                  );
                },
              );
            },
          );
        },
      ),
    );
  }
}
