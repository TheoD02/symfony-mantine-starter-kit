import $api from '@/api/api';
import { components } from '@/api/schema';
import { Button, Group, Loader, Textarea, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { createLazyFileRoute } from '@tanstack/react-router'
import { z } from 'zod';

export const Route = createLazyFileRoute('/articles/$id/edit')({
  component: EditArticleLoader,
})

const schema = z.object({
  title: z.string().min(3).max(255),
  content: z.string().min(10).max(10000),
});

function EditArticleLoader() {
  const params = Route.useParams();

  const { data: article, isLoading } = $api.useQuery('get', '/api/articles/{id}', {
    params: {
      path: {
        id: params.id,
      },
    },
  });

  if (isLoading) {
    return <Loader/>;
  }

  return <EditArticle articleId={params.id} article={article} />; // ODO: fix type :/
}

function EditArticle({articleId, article}: { articleId: string, article: components["schemas"]["Article.jsonld"] }) {
  const form = useForm({
    initialValues: {
      title: article.title,
      content: article.content,
    },

    validate: zodResolver(schema),
  });

  const { mutate } = $api.useMutation("patch", "/api/articles/{id}", {
    onSuccess: () => {
      notifications.show({
        title: "Article updated",
        message: "Article updated successfully",
      });
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => mutate({ body: values, params: {path: {id: articleId}}}))}>
      <TextInput
        withAsterisk
        label="Title"
        placeholder="Enter title"
        {...form.getInputProps("title")}
      />
      <Textarea
        withAsterisk
        label="Content"
        placeholder="Enter content"
        {...form.getInputProps("content")}
      />
      <Group justify="flex-start" mt="md">
        <Button type="submit">Update</Button>
      </Group>
    </form>
  );
}