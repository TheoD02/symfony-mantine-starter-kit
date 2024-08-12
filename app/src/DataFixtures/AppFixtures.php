<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Factory\ArticleFactory;
use App\Factory\UserFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        UserFactory::new()->create([
            'password' => '$2y$13$TtOASv6QIXDWg2XULGESdOplFVRFcINUJvPULKKi6MW9LZFRwsKTi', // admin
            'roles' => ['ROLE_USER'],
        ]);

        ArticleFactory::new()->many(100)->create();
    }
}
