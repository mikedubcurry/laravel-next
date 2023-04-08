<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    protected $fillable = [
        'version',
        'survey_id',
    ];

    public function survey()
    {
        return $this->belongsTo(Survey::class);
    }

    public function isFinalized()
    {
        return $this->survey->isFinalized();
    }

    public function isUpgraded()
    {
        return $this->survey->isUpgraded();
    }

    public function inventoryItems()
    {
        return $this->hasMany(InventoryItem::class);
    }

    public function totalEstimatedWeight()
    {
        return $this->inventoryItems->sum('estimated_weight');
    }

    public function surveyor()
    {
        return $this->survey->surveyor;
    }
}
