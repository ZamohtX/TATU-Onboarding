import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:provider/provider.dart';
import '../controllers/WorkController.dart';

class WorksListScreen extends StatefulWidget {
  final int attractionId;
  final String attractionName;

  const WorksListScreen({
    super.key,
    required this.attractionId,
    required this.attractionName,
  });

  @override
  State<WorksListScreen> createState() => _WorksListScreenState();
}

class _WorksListScreenState extends State<WorksListScreen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      Provider.of<WorkController>(
        context,
        listen: false,
      ).fetchWorks(widget.attractionId);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.attractionName),
        backgroundColor: Colors.brown,
      ),
      body: Consumer<WorkController>(
        builder: (context, controller, child) {
          if (controller.isLoading) {
            return const Center(child: CircularProgressIndicator());
          }
          if (controller.error != null) {
            return Center(child: Text('Ocorreu um erro: ${controller.error}'));
          }
          if (controller.works.isEmpty) {
            return const Center(
              child: Text('Nenhuma obra encontrada para esta atração'),
            );
          }
          return ListView.builder(
            itemCount: controller.works.length,
            itemBuilder: (context, index) {
              final work = controller.works[index];
              return ListTile(
                title: Text(work.title),
                subtitle: Text(work.author ?? 'Autor desconhecido'),
              );
            },
          );
        },
      ),
    );
  }
}
