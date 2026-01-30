<?php

namespace Database\Seeders;

use App\Models\NewsPost;
use Illuminate\Database\Seeder;

class NewsPostSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'title' => 'Barangay Assembly 2025',
                'slug' => 'barangay-assembly-2025',
                'excerpt' => "Join us for the annual Barangay Assembly. We'll discuss accomplishments, projects, and plans for the year.",
                'body' => '<p>We invite all residents to the Barangay Assembly. Agenda includes annual report, projects, and open forum.</p>',
                'published_at' => now(),
            ],
            [
                'title' => 'New Barangay Hall Hours',
                'slug' => 'new-barangay-hall-hours',
                'excerpt' => "Our office will now be open Mondays to Fridays, 8:00 AM – 5:00 PM. Saturdays by appointment.",
                'body' => '<p>Effective immediately, Barangay Hall hours are Mon–Fri 8AM–5PM. For Saturday visits, please contact us in advance.</p>',
                'published_at' => now(),
            ],
            [
                'title' => 'Certificate Request Process',
                'slug' => 'certificate-request-process',
                'excerpt' => "Learn how to request barangay clearance, indigency, and other certificates through our streamlined process.",
                'body' => '<p>You may submit requests via our website or in person. Bring valid ID and any required documents.</p>',
                'published_at' => now(),
            ],
        ];

        foreach ($items as $item) {
            NewsPost::query()->updateOrCreate(
                ['slug' => $item['slug']],
                $item
            );
        }
    }
}
