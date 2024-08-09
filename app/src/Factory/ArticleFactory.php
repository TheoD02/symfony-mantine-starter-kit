<?php

declare(strict_types=1);

namespace App\Factory;

use App\Entity\Article;
use Zenstruck\Foundry\Persistence\PersistentProxyObjectFactory;

/**
 * @extends PersistentProxyObjectFactory<Article>
 */
final class ArticleFactory extends PersistentProxyObjectFactory
{
    public static function class(): string
    {
        return Article::class;
    }

    protected function defaults(): array
    {
        return [
            'content' => self::faker()->text(255),
            'createdAt' => \DateTimeImmutable::createFromMutable(self::faker()->dateTime()),
            'title' => self::faker()->text(50),
        ];
    }
}
