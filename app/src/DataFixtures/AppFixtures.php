<?php

namespace App\DataFixtures;

use App\Factory\UserFactory;
use App\Factory\ArticleFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        UserFactory::new()->create([
            'email' => 'admin@domain.tld',
            'password' => '$2y$13$TtOASv6QIXDWg2XULGESdOplFVRFcINUJvPULKKi6MW9LZFRwsKTi', // admin
            'roles' => ['ROLE_USER'],
        ]);

        ArticleFactory::new()->many(100)->create();
    }
}
