<x-mail::message>
# New Message from Linkframe Tech Website

**Name:** {{ $data['name'] }}  
**Email:** {{ $data['email'] }}  
**Subject:** {{ $data['subject'] }}

**Message:**  
{{ $data['message'] }}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
