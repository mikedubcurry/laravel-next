<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_name',
        'customer_email',
        'customer_phone',
        'address_id',
        'surveyor_id',
    ];

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function surveyor()
    {
        return $this->belongsTo(User::class);
    }

    public function finalize()
    {
        $this->update([
            'finalized_at' => now(),
        ]);
    }

    public function isFinalized()
    {
        return ! is_null($this->finalized_at);
    }

    public function upgrade()
    {
        $this->update([
            'upgraded_at' => now(),
        ]);
    }

    public function isUpgraded()
    {
        return ! is_null($this->upgraded_at);
    }

    public function inventory()
    {
        return $this->hasMany(Inventory::class);
    }

    public function inventoryItems()
    {
        return $this->hasManyThrough(InventoryItem::class, Inventory::class);
    }
}
