<?php

declare(strict_types=1);

namespace App\Controller;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/connect/spotify', name: 'connect_spotify')]
class SpotifyController extends AbstractController
{
    #[Route('')]
    public function redirectToSpotify(ClientRegistry $clientRegistry): RedirectResponse
    {
        return $clientRegistry->getClient('spotify')->redirect();
    }

    #[Route('/check', name: '_check')]
    public function check(): RedirectResponse
    {
        throw new \RuntimeException('Should be never reached, Authenticator should handle this');
    }
}
